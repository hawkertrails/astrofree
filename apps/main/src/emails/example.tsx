import * as React from 'react';

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

export function ExampleEmail({ name = 'User' }: { name?: string }) {
  return (
    <Html>
      <Head />
      <Preview>Astrofree example email</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Hello, {name}</Heading>
          <Section>
            <Text style={text}>This is an example email from Astrofree Main.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '560px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const text = {
  color: '#666',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0',
};

export default ExampleEmail;
