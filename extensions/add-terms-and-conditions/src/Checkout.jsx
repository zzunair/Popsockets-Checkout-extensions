import {
  reactExtension,
  Banner,
  BlockStack,
  Checkbox,
  useInstructions,
  useTranslate,
  useBuyerJourneyIntercept
} from "@shopify/ui-extensions-react/checkout";
import { useState } from "react";


// 1. Choose an extension target
export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const instructions = useInstructions();
  const [terms, setTerms] = useState(false)


  // 2. Check instructions for feature availability, see https://shopify.dev/docs/api/checkout-ui-extensions/apis/cart-instructions for details
  if (!instructions.attributes.canUpdateAttributes) {
    // For checkouts such as draft order invoices, cart attributes may not be allowed
    // Consider rendering a fallback UI or nothing at all, if the feature is unavailable
    return (
      <Banner title="Terms & Condition" status="warning">
        {translate("attributeChangesAreNotSupported")}
      </Banner>
    );
  }

  async function onCheckboxChange(isChecked) {
    // 4. Call the API to modify checkout
    setTerms(isChecked)
  }

  useBuyerJourneyIntercept(
    ({canBlockProgress}) => {

      if (canBlockProgress) {
        if (!terms) {
          return {
            behavior: 'block',
            reason: 'Accept Sales Terms',
            errors: [
              {
                message: `Please accept Terms of Sales to continue !`,
              },
            ],
          };
        }
      }
  
      return {
        behavior: 'allow',
      };
    },
  );


  // 3. Render a UI
  return (
    <BlockStack border={"dotted"} padding={"tight"}>
      <Banner title="Accept Terms of Sale">
        <Checkbox onChange={onCheckboxChange}>
          Please accept Terms 
        </Checkbox>
      </Banner>
    </BlockStack>
  );


}