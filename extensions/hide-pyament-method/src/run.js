// @ts-check

// Use JSDoc annotations for type safety
/**
* @typedef {import("../generated/api").RunInput} RunInput
* @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
*/

/**
* @type {FunctionRunResult}
*/
const NO_CHANGES = {
  operations: [],
};

// The configured entrypoint for the 'purchase.payment-customization.run' extension target
/**
* @param {RunInput} input
* @returns {FunctionRunResult}
*/
export function run(input) {

  const customerHasCheckTag = input?.cart?.buyerIdentity?.customer?.hasAnyTag;
  console.log("customerHasCheckTag=-=-=-=-=-=-=-=-=-=-=-=-", customerHasCheckTag);

  if (customerHasCheckTag) {
    return NO_CHANGES;
  }

  // Find the payment method to hide
  const hidePaymentMethod = input.paymentMethods
    .find(method => method.name.includes("Check"));

  if (!hidePaymentMethod) {
    return NO_CHANGES;
  }

  return {
    operations: [{
      hide: {
        paymentMethodId: hidePaymentMethod.id
      }
    }]
  };
};