import React from "react";
import "./Email.css";
import { Footer, Header } from "../../components";
import { baseUrl } from "../../constants";
import { useParams } from "react-router-dom";
interface Props {}
const Email: React.FC<Props> = () => {
  const params = useParams<{ subject: string }>();

  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    body: "",
    sender: "",
    phoneNumber: "",
    loading: false,
    message: "",
    error: "",
    subject: "",
  });
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((s) => ({ ...s, loading: true }));
    try {
      if (state.subject === "") {
        setState((s) => ({
          ...s,
          error: "Email subject is required.",
          message: "",
          loading: false,
        }));
        return;
      }
      if (state.firstName === "") {
        setState((s) => ({
          ...s,
          error: "First Name(s) is required.",
          message: "",
          loading: false,
        }));
        return;
      }
      if (state.lastName === "") {
        setState((s) => ({
          ...s,
          error: "Last Name is required.",
          message: "",
          loading: false,
        }));
        return;
      }
      if (state.body.length < 10) {
        setState((s) => ({
          ...s,
          error: "The email body must have at least 10 characters.",
          message: "",
          loading: false,
        }));
        return;
      }
      if (state.sender === "") {
        setState((s) => ({
          ...s,
          error: "Please enter your email address.",
          message: "",
          loading: false,
        }));
        return;
      }

      if (state.phoneNumber === "") {
        setState((s) => ({
          ...s,
          error: "Your Phone Number is required.",
          message: "",
          loading: false,
        }));
        return;
      }
      setState((s) => ({ ...s, message: "", error: "", loading: false }));
      const res = await fetch(`${baseUrl}/api/v1/send-email`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: state.subject,
          body: state.body,
          from: state.sender,
          firstName: state.firstName,
          lastName: state.lastName,
          phoneNumber: state.phoneNumber,
        }),
        method: "POST",
      });
      const data = await res.json();
      if (data.code === 500) {
        setState({ ...state, message: "", error: data.message });
        return;
      }
      setState((s) => ({
        ...s,
        message: "The email was sent successfully.",
        firstName: "",
        lastName: "",
        body: "",
        sender: "",
        phoneNumber: "",
        loading: false,
        error: "",
        subject: "",
      }));
    } catch (err) {
      setState((s) => ({ ...s, error: "Couldn't send the email try again." }));
    } finally {
      setState((s) => ({ ...s, loading: false }));
    }
  };

  React.useEffect(() => {
    setState((s) => ({ ...s, subject: params.subject || "" }));
  }, [params]);

  return (
    <div className="email">
      <Header />
      <div className="email__main">
        <form onSubmit={sendEmail}>
          <h1>Send us an Email.</h1>

          {state.loading && (
            <div className="email__loader">
              <div />
            </div>
          )}

          <input
            type="text"
            placeholder="subject"
            value={state.subject}
            onChange={(e) =>
              setState((s) => ({ ...s, subject: e.target.value }))
            }
          />

          <div>
            <input
              type="text"
              placeholder="your first name(s)"
              value={state.firstName}
              onChange={(e) =>
                setState((s) => ({ ...s, firstName: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="your last name"
              value={state.lastName}
              onChange={(e) =>
                setState((s) => ({ ...s, lastName: e.target.value }))
              }
            />
          </div>

          <textarea
            placeholder="type your message"
            value={state.body}
            onChange={(e) => setState((s) => ({ ...s, body: e.target.value }))}
          />

          <input
            type="email"
            placeholder="your email address"
            value={state.sender}
            onChange={(e) =>
              setState((s) => ({ ...s, sender: e.target.value }))
            }
          />

          <input
            type="tel"
            placeholder="your phone number"
            value={state.phoneNumber}
            onChange={(e) =>
              setState((s) => ({ ...s, phoneNumber: e.target.value }))
            }
          />
          {state.error && (
            <p className="email__message--error">{state.error}</p>
          )}
          {state.message && <p className="email__message">{state.message}</p>}
          <button type="submit">SEND</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Email;
