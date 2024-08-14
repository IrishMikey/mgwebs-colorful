"use server";

export async function sendContact(formData: FormData) {
  const rawFormData = {
    email: formData.get("senderEmail"),
    message: formData.get("message"),
  };

  console.log(formData);

  const response = await fetch("api/send", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();

  if (response.ok) {
    console.log("Email sent succesfully!: ", result);
    // toast.success({ text: "Email sent succesfully!" });
  }
  console.log("Email not sent: ", result.error);
  //   toast.warning({ text: "Email not sent!" });
}
