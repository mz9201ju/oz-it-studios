import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONTACT_ENDPOINT,
  CONTACT_INITIAL_FORM,
  CONTACT_MESSAGES,
  CONTACT_SUCCESS_RESET_MS,
} from "../constants/contact";
import { validateContactForm } from "../utils/validation";

export default function useContactForm() {
  const [form, setForm] = useState(CONTACT_INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSubmit = useCallback(async () => {
    setStatus("");
    const formErrors = validateContactForm(form);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus(CONTACT_MESSAGES.validation);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus(CONTACT_MESSAGES.success);
      setForm(CONTACT_INITIAL_FORM);
      setErrors({});

      timeoutRef.current = window.setTimeout(() => {
        setStatus("");
      }, CONTACT_SUCCESS_RESET_MS);
    } catch (error) {
      console.error(error);
      setStatus(CONTACT_MESSAGES.failure);
    } finally {
      setLoading(false);
    }
  }, [form]);

  return {
    form,
    errors,
    loading,
    status,
    handleChange,
    handleSubmit,
  };
}
