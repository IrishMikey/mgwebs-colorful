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

type AuditRequestEmailProps = {
  name: string;
  website: string;
  contact: string;
};

export default function AuditRequestEmail({
  name,
  website,
  contact,
}: AuditRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New free speed check request: {website}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                New free speed check request
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
              <Hr />
              <Text>Reply within 24 hours, as promised on the site.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
