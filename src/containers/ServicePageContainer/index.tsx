

import ServiceIntroSection from "./components/ServiceIntroSection";
import ServiceTextSection from "./components/ServiceTextSection";
import ServiceCtaBanner from "./components/ServiceCtaBanner";

import { ServicePageContent } from "./definitions";

import styles from "./ServicePageContainer.module.css";
import PaymentMethods from "@/src/components/PaymentMethods";


interface ServicePageContainerProps {
  content: ServicePageContent;
}

const ServicePageContainer = ({ content }: ServicePageContainerProps) => {
  return (
    <main className={styles.ServicePageContainer}>
      <ServiceIntroSection content={content.intro} />

      <div className={styles.content}>
        {content.sections.map((section, index) => (
          <ServiceTextSection key={index} section={section} />
        ))}
      </div>

      {content.cta && <ServiceCtaBanner content={content.cta} />}

      {content.showPaymentMethods && <PaymentMethods />}
    </main>
  );
};

export default ServicePageContainer;