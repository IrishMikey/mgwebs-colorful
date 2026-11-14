import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from "react-email";

type ReviewRequestEmailProps = {
  name: string;
  website: string;
  contact: string;
  notes?: string;
};

export default function ReviewRequestEmail({
  name,
  website,
  contact,
  notes,
}: ReviewRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New free review request: {website}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                New free review request
              </Heading>
              <Text>
                <strong>Name:</strong> {name}
              </Text>
              <Text>
                <strong>Website:</strong> {website}
              </Text>
              <Text>
                <strong>Email or phone:</strong> {contact}
              </Text>
              {notes ? (
                <Text>
                  <strong>Anything to look at:</strong> {notes}
                </Text>
              ) : null}
              <Hr />
              <Text>Reply within 24 hours, as promised on the site.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
