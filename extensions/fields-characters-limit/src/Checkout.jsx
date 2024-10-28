import {
  reactExtension,
  useShippingAddress,
  useBillingAddress,
  useBuyerJourneyIntercept,
  Text
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const shippingAddress = useShippingAddress();
  const billingAddress = useBillingAddress();
  console.log("shippingAddress", shippingAddress);
  
  
  useBuyerJourneyIntercept(
    ({canBlockProgress}) => {
      let check = false
      // let ErrorField = ''

      for (const key of Object.keys(shippingAddress)) {
        if (shippingAddress[key] != undefined && shippingAddress[key].length > 50) {
          console.log("shippingAddress[key]", shippingAddress[key], shippingAddress[key].length);
          
          check =true
        }
      }

      for (const key of Object.keys(billingAddress)) {
        if (billingAddress[key] != undefined && billingAddress[key].length > 50) {
          console.log("billingAddress[key]", billingAddress[key]);
          check =true
        }
      }

      if (canBlockProgress) {
        console.log("check", check );
        
        if (check) {
          return {
            behavior: 'block',
            reason: 'field having 50+ characters',
            errors: [
              {
                message: `Sorry, Not more than 50 characters allowed in Address !`,
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
  return <Text> </Text>
}