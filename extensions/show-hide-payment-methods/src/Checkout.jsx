import {
  reactExtension,
  useApi,
  useSelectedPaymentOptions,
  PaymentIcon,
  InlineStack
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const { extension } = useApi();
  const options = useSelectedPaymentOptions();
  const allShopifyMethods = ['7-eleven','acima-leasing','addi','aeropay','affin-bank','affirm','aftee','afterpay-paynl-version','afterpay','airtel-money','airteltigo-mobile-money','aktia','akulaku-paylater','akulaku','alandsbanken','alfamart','alfamidi','alipay-hk','alipay-paynl-version','alipay','alliance-bank','alma','amazon','ambank','american-express','anyday','apecoin','aplazo','apple-pay','aqsat','arhaus','arvato','ask','astrapay','atm-bersama','atobaraidotcom','atome','atone','atrato','au-kantan-kessai','axs','bancnet','bancontact','bangkok-bank','bank-islam','bank-muamalat','bank-rakyat','bbva-cie','bc-card','bca-klikpay','bca','bdo','belfius','benefit','biercheque-paynl-version','bigc','billease','biller-paynl-version','billie','billink-method','billink','bitcoin-cash','bitcoin','bizum','blik','bnbchain','bni','bogus-app-coin','boleto','boost','bpi','bread-pay','bread','bri-direct-debit','bri','brimo','bsi','bsn','bss','busd','careem-pay','cartes-bancaires','cash-app-pay','catch-payments','cebuana','cetelem','checkout-finance','cimb-clicks','cimb','circle-k','citadele','clave-telered','clearpay','cleverpay','cliq','coinsph','collector-bank','coop','coppel-pay','credit-key','creditclick-paynl-version','credix','d-barai','dai','daily-yamazaki','dan-dan','dana','danamon-online','dankort','danske-bank','dash','depay','deutsche-bank','diners-club','directpay','discover','divido','dnb','docomo-barai','dogecoin','dropp','duologi','dwolla','ebucks','echelon-financing','ecpay','eft-secure','eghl','elo','elv','enets','eos','epayments','epospay','eps','esr-paymentslip-switzerland','ethereum','etika','facebook-pay','fairstone-payments','familymart','farmlands','fashion-giftcard-paynlversion','fashioncheque','fawry','finloup','fintecture','flexiti','forbrugsforeningen','fortiva','fps','fpx','freecharge','futurepay-mytab','gcash','generalfinancing','genoapay','gezondheidsbon-paynl-version','giftcard','giropay','givacard','gmo-bank-transfer','gmo-postpay','google-pay','google-wallet','gopay','grabpay','grailpay','gusd','hana-card','handelsbanken','hello-clever','hong-leong-bank','hong-leong-connect','hsbc','humm','hyper','hypercard','hypercash','hyundai-card','ideal','in3','inbank','indomaret','ing-homepay','interac','ivy','jcb','jousto','kakao-pay','kakebaraidotcom','kasikornbank','kb-card','kbc-cbc','kfast','klarna-pay-later','klarna-pay-now','klarna-slice-it','klarna','knet','krediidipank','kredivo','krungsri','krungthai-bank','kueski-pay','kunst-en-cultuur-cadeaukaart','kuwait-finance-house','laser','latitude-creditline-au','latitude-gem-au','latitude-gem-nz','latitude-go-au','latitudepay','lawson','laybuy-heart','laybuy','lbc','lhv','line-pay','linkaja','linkpay','litecoin','lku','lotte-card','luminor','lydia','mada','maestro','mandiri','mash','master','masterpass','maxima','maya-bank','maya','maybank-qrpay','maybank','maybankm2u','mb-way','mb','mcash','medicinos-bankas','meeza','merpay','meta-pay','ministop','mobicred','mobikwik','mobilepay','mode','mokka','momopay','mondido','monero','mpesa','mtn-mobile-money','myfatoorah','n26','naps','nationale-bioscoopbon','nationale-entertainmentcard','naver-pay','nelo','netbanking','neteller','nh-card','nordea','novuna','ocbc-bank','octo-clicks','ola-money','omasp','op','opay','openpay','ovo','oxxo','ozow','pagoefectivo','paid','paidy','palawa','palawan','pay-easy','pay-pay','paybylink','payco','payconiq','payd','payfast-instant-eft','payflex','payid','paymark-online-eftpos','paymaya','payme','paynow','paypal','payplan','paypo','paysafecard-paynl-version','paysafecard','paysafecash','paysera','paytm','payto','paytomorrow','payu','payzapp','pei','perlasfinance','permata','pivo','pix','podium-cadeaukaart','poli','polygon','poppankki','postfinance-card','postfinance-efinance','postpay','pps','przelew24','przelewy24-paynl-version','public-bank','publicbank-pbe','qr-promptpay','qris','qrph','rabbit-line-pay','rakuten-pay','rapid-transfer','ratepay','rcbc','rcs','revolut','rhb-bank','rhb-now','rietumu','riverty-paynl-version','rupay','saastopankki','sadad','sam','samsung-card','samsung-pay','santander','satisfi','satispay','sbpl','scalapay','seb','sepa-bank-transfer','sequra','sezzle','shib','shinhan-card','shopeepay','shopify-pay','siam-commercial','siauliu-bankas','siirto','sinpe-movil','skrill-digital-wallet','smartpay','snap-checkout','sofort','softbank','solanapay','spankki','spei','splitit','spotii','spraypay','standard-chartered','stc-pay','sunkus','svea-b2b-faktura','svea-b2b-invoice','svea-credit-account','svea-delbetalning','svea-faktura','svea-invoice','svea-lasku','svea-ostukonto','svea-part-payment','svea-yrityslasku','sveaeramaksu','swedbank','swiftpay','swish','swissbilling','synchrony-pay','synchrony','tabby','tabit','tamara','tandympayment','tbi-bank','tendopay','tensile','tesco-lotus','thanachart-bank','toss','touch-n-go','trevipay','truemoney-pay','trustly','twig-pay','twint','uae-visa','uangme','ubp','unionpay','unipay','uob-ez-pay','uob-thai','uob','upi','urpay','usdc','usdp','v-pay','valu','venmo','viabill','vipps','visa-electron','visa','vvv-cadeaukaart-paynl-version','vvv-giftcard','walley','wbtc','webshop-giftcard','wechat-pay','wechat-paynl-version','wegetfinancing','xrp','ymobile','younited-pay','zalopay','zapper','zinia','zip','zoodpay']
  const methods = options.length ?
    options.map((method, index)=>{
      let {type} =method
      type = type.replace(/([A-Z])/g, (match) => '-' + match.toLowerCase())
      if (allShopifyMethods.includes(type)) {
        return <PaymentIcon key={index} name={type} />
      }
    })
  :
  <></>
  return (<InlineStack spacing="tight">
      {methods}
  </InlineStack>)
  
}