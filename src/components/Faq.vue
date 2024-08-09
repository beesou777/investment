<template>
  <div class="max-w-[1440px] mx-auto md:p-[2rem] md:py-10 py-5" id="faqs">
    <h1 class="font-bold md:my-10 my-5 text-center mb-6 px-3 border-bottom">
      FAQs
    </h1>
    <div class="space-y-4">
      <div
        v-for="(faq, index) in faqData"
        :key="index"
        data-reveal
        v-scroll-reveal
        class="overflow-hidden border-b-2 last:border-b-0 py-3 !m-0"
      >
        <button
          @click="toggle(index)"
          class="w-full px-4 py-2 text-left flex justify-between border-none outline-none transition-colors  items-center"
        >
          <span class="h4 !font-semibold">{{ faq.Q }}</span>
          <span
            class="text-gray-500 h2"
            :class="
              activeIndex === index
                ? 'rotate-[45deg] duration-500'
                : 'rotate-0 duration-500'
            "
            >+</span
          >
        </button>
        <div
          class="px-4 body-2 max-w-[56rem] h-0 p-0 overflow-hidden opacity-0 transition-all duration-1000 ease-out !font-normal"
          :class="activeIndex === index ? 'open' : 'close'"
        >
          {{ faq.A }}
        </div>
      </div>
    </div>
  </div>
  <teleport to="head">
    <component :is="'script'" type="application/ld+json">
     {{ faqSchema }}
    </component>
  </teleport>
</template>

<script setup lang="ts">
import { computed, guardReactiveProps, onMounted, ref,Ref } from "vue";

const activeIndex: Ref<number> = ref(-1);

interface Faq {
  Q: string;
  A: string;
}

interface SchemaQuestion {
  '@type' : 'Question';
  name : string;
  acceptedAnswer : {
    '@type' : 'Answer';
    text : string;
  }
}

interface SchemaFAQ {
  '@context' : 'https://schema.org';
  '@type' : 'FAQPage';
  mainEntity : SchemaQuestion[];
}

const faqData : readonly Faq[] = [
   {
      Q: "What types of investments do you offer?",
      A: " We offer a diverse range of investment options, including stocks, bonds, mutual funds, ETFs, and real estate. Our platform also provides access to alternative investments like commodities and cryptocurrencies.",
    },
    {
      Q: "How do I start investing with your platform?",
      A: "To start investing, simply create an account, complete the registration process, and fund your account. You can then explore our investment options and choose the ones that align with your financial goals.",
    },
    {
      Q: "What is the minimum investment required?",
      A: "The minimum investment amount varies depending on the type of investment. For most options, you can start investing with as little as $100, making it accessible for investors of all levels.",
    },
    {
      Q: "How secure is my money and personal information?",
      A: "We prioritize the security of your investments and personal information. Our platform uses advanced encryption technology, and we comply with all regulatory requirements to ensure your funds are safe.",
    },
    {
      Q: "Can I withdraw my money at any time?",
      A: "Yes, you can withdraw your funds at any time. However, some investments may have specific terms or penalties for early withdrawal, so it's important to review the details before making a decision.",
    },
    {
      Q: "What fees are associated with investing on your platform?",
      A: "We have a transparent fee structure that varies depending on the type of investment. Common fees include management fees, trading fees, and withdrawal fees. You can view all applicable fees in your account dashboard.",
    },
    {
      Q: "How do you help me choose the right investments?",
      A: "ur platform provides a range of tools and resources, including risk assessment questionnaires, market analysis, and expert recommendations, to help you make informed investment decisions.",
    },
    {
      Q: "What platforms do you use for e-commerce development?",
      A: "We develop e-commerce solutions using platforms like Shopify, WooCommerce, Magento, and custom-built solutions tailored to your business needs.",
    },
    {
      Q: "What is the risk level of the investments offered?",
      A: "The risk level varies by investment type. We offer options ranging from low-risk bonds to higher-risk stocks and alternative investments. It's important to choose investments that match your risk tolerance and financial goals.",
    },
    {
      Q: "Do you offer any tax-advantaged investment accounts?",
      A: "Yes, we offer tax-advantaged accounts such as IRAs (Individual Retirement Accounts) and 401(k) rollovers. These accounts allow you to grow your investments with potential tax benefits.",
    }
]


const faqSchema = computed (():string => {
  const schema : SchemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq): SchemaQuestion => ({
      '@type': 'Question',
      name: faq.Q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.A
      }
    })),
  };
  return JSON.stringify(schema, null, 2);
});

const toggle = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = -1;
  } else {
    activeIndex.value = index;
  }
};
</script>

<style scoped>
.transition-all {
  transition: max-height 0.5s ease, padding 0.5s ease, width 0.5s ease,
    opacity 0.7s ease;
}

.open {
  max-height: auto;
  height: 100%;
  width: 100vw;
  padding: 1rem;
  opacity: 1;
}
</style>