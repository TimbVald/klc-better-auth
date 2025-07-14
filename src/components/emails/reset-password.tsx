import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface PasswordResetEmailProps {
    userName: string;
    userEmail: string;
    resetUrl: string;
}

const PasswordResetEmail = (props: PasswordResetEmailProps) => {
    const { userName, userEmail, resetUrl } = props;
  return (
    <Html lang="fr" dir="ltr">
      <Head />
      <Preview>Réinitialisez votre mot de passe</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-lg max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[16px]">
                Réinitialisation de mot de passe
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Vous avez demandé la réinitialisation de votre mot de passe
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] leading-[24px]">
                Bonjour {userName},
              </Text>
              
              <Text className="text-[16px] text-gray-700 mb-[16px] leading-[24px]">
                Nous avons reçu une demande de réinitialisation de mot de passe pour votre compte via votre email <strong>{userEmail}</strong>. 
                Si vous êtes à l'origine de cette demande, cliquez sur le bouton ci-dessous pour 
                créer un nouveau mot de passe.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[32px] leading-[24px]">
                Ce lien expirera dans <strong>24 heures</strong> pour des raisons de sécurité.
              </Text>

              {/* Reset Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={resetUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border transition-colors"
                >
                  Réinitialiser mon mot de passe
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[16px] leading-[20px]">
                Si le bouton ne fonctionne pas, vous pouvez copier et coller ce lien dans votre navigateur :
              </Text>
              
              <Text className="text-[14px] text-blue-600 mb-[24px] break-all">
                <Link href={resetUrl} className="text-blue-600 underline">
                  {resetUrl}
                </Link>
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[16px] leading-[24px]">
                Si vous n'avez pas demandé cette réinitialisation, vous pouvez ignorer cet email 
                en toute sécurité. Votre mot de passe actuel restera inchangé.
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="bg-yellow-50 border-l-4 border-yellow-400 p-[16px] mb-[32px]">
              <Text className="text-[14px] text-yellow-800 m-0 font-semibold mb-[8px]">
                ⚠️ Conseil de sécurité
              </Text>
              <Text className="text-[14px] text-yellow-700 m-0 leading-[20px]">
                Assurez-vous de choisir un mot de passe fort contenant au moins 8 caractères, 
                incluant des lettres majuscules, minuscules, des chiffres et des symboles.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px] text-center">
              <Text className="text-[14px] text-gray-600 mb-[8px]">
                Cet email a été envoyé par <strong>KLC Computing Inc.</strong>
              </Text>
              <Text className="text-[12px] text-gray-500 m-0 mb-[8px]">
                123 Rue de la Technologie, Yaoundé, Cameroun
              </Text>
              <Text className="text-[12px] text-gray-500 m-0">
                © 2025 KLC Computing Inc. Tous droits réservés. | 
                <Link href="#" className="text-gray-500 underline ml-[4px]">
                  Se désabonner
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;