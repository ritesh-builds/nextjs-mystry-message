
import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Container,
  Hr,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

const styles = {
  body: {
    backgroundColor: "#08090D",
    fontFamily: "Roboto, Arial, sans-serif",
    padding: "40px 12px",
  },
  container: {
    maxWidth: "480px",
    margin: "0 auto",
    backgroundColor: "#111319",
    border: "1px solid #252936",
    borderRadius: "18px",
    overflow: "hidden" as const,
  },
  topBar: {
    height: "4px",
    backgroundColor: "#8B5CF6",
  },
  header: {
    padding: "30px 32px 10px",
  },
  brand: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "2px",
    margin: "0",
  },
  content: {
    padding: "25px 32px 35px",
  },
  badge: {
    display: "inline-block",
    color: "#C4B5FD",
    backgroundColor: "#241D38",
    border: "1px solid #403263",
    borderRadius: "20px",
    fontSize: "10px",
    fontWeight: "bold",
    letterSpacing: "1.5px",
    padding: "7px 12px",
    margin: "0 0 20px",
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "-1px",
    lineHeight: "38px",
    margin: "0 0 15px",
  },
  description: {
    color: "#A1A1AA",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "0 0 28px",
  },
  otpCard: {
    backgroundColor: "#191B26",
    border: "1px solid #353047",
    borderRadius: "14px",
    padding: "24px 15px",
    textAlign: "center" as const,
  },
  otpLabel: {
    color: "#A1A1AA",
    fontSize: "10px",
    fontWeight: "bold",
    letterSpacing: "3px",
    margin: "0 0 14px",
  },
  otp: {
    color: "#C4B5FD",
    fontSize: "36px",
    fontWeight: "700",
    letterSpacing: "10px",
    lineHeight: "44px",
    margin: "0",
  },
  expiry: {
    color: "#71717A",
    fontSize: "11px",
    margin: "15px 0 0",
  },
  security: {
    backgroundColor: "#171923",
    border: "1px solid #292D3A",
    borderRadius: "10px",
    padding: "16px",
    marginTop: "24px",
  },
  securityTitle: {
    color: "#E4E4E7",
    fontSize: "12px",
    fontWeight: "bold",
    margin: "0 0 7px",
  },
  securityText: {
    color: "#9295A1",
    fontSize: "11px",
    lineHeight: "19px",
    margin: "0",
  },
  divider: {
    borderColor: "#292D38",
    margin: "0 32px",
  },
  footer: {
    padding: "22px 32px 28px",
    textAlign: "center" as const,
  },
  footerText: {
    color: "#71717A",
    fontSize: "11px",
    lineHeight: "19px",
    margin: "0",
  },
  copyright: {
    color: "#525562",
    fontSize: "10px",
    marginTop: "12px",
  },
};

export default function VerificationEmail({ username, otp, }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Your Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>
        Your verification code is {otp}. It expires in 10 minutes.
      </Preview>

      <Section style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.topBar} />

          {/* Brand */}
          <Section style={styles.header}>
            <Text style={styles.brand}>
              ✦ YOURBRAND
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.content}>
            <Text style={styles.badge}>
              ✦ ACCOUNT VERIFICATION
            </Text>

            <Heading as="h1" style={styles.heading}>
              Hey {username},
              <br />
              Let's make it official.
            </Heading>

            <Text style={styles.description}>
              You're just one step away! Enter the
              verification code below to confirm your
              email address and unlock your account.
            </Text>

            {/* OTP Card */}
            <Section style={styles.otpCard}>
              <Text style={styles.otpLabel}>
                YOUR ONE-TIME PASSWORD
              </Text>

              <Text style={styles.otp}>
                {otp}
              </Text>

              <Text style={styles.expiry}>
                ⏱ Valid for 10 minutes only
              </Text>
            </Section>

            {/* Security Notice */}
            <Section style={styles.security}>
              <Text style={styles.securityTitle}>
                🔒 A quick security reminder
              </Text>

              <Text style={styles.securityText}>
                Never share this code with anyone.
                Our team will never ask you for your
                verification code.
              </Text>
            </Section>
          </Section>

          <Hr style={styles.divider} />

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              Didn't request this verification?
              No worries, just ignore this email.
            </Text>

            <Text style={styles.copyright}>
              © 2026 YOURBRAND. All rights reserved.
            </Text>

            <Text style={styles.copyright}>
              Crafted with care. Designed for you.
            </Text>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}
