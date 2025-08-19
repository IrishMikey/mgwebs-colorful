import React from "react";
import { useFormStatus } from "react-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      color="primary"
      size="lg"
      className="text-lg font-bold"
      isDisabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{""}
          <FontAwesomeIcon icon={faChevronRight} />
        </>
      )}
    </Button>
  );
}
