import MainSection from './Section-1_Main-Head';
import PMSection from './Section-2_PM-Section';
import PricingSection from './Section-3_Pricing';

const index = ():JSX.Element => {
  return (
    <main>
        <MainSection />
        <PMSection />
        <PricingSection />
    </main>
  )
}

export default index