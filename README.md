1. run command "create-next-app" to create app
2. Add clerk authentication
3. Design signIn/signUp page by adding inbuilt tag(Image)
4. Designing of Header Section
   -> Adding Header component in layout so that it appear in whole application
   -> Adding of headerMenu
   -> Navigate on headerMenu using map
   -> change font using Inter

5. Designing of Search and google map sections
   A. Search section
   ***
   -> Add InputItems( Pickup and Drop location)
   -> Add Search Button
6. Generate api key within the credential option.
7. import <react-google-places-autocomplete> in InputItem component.
8. We add <latAndlong> function to get access of it with the help of Google Map places api
9. We use contextHook to store the information of source and destination address fetched with the help of api which can be accessible to whole application and get its information through useEffect hook;

10. <Google Syle wizard> used to style and customize our own map and create our map id for our map.
11. Integrate map into our Googlemap section by using mapId and installing <react-google-map/api.>
12. Add <LoadScript> component in page.js so that we can avoid error of using google api key at multile places and sync each and other component.

13. We use context hook to change the hardcoded lat nad lng of places using <useEffect> hook.
14. Use inbuilt <MarkerF> component to mark the source nad destination on map.
15. Use <OverlayviewF> component to lable the mark on the map.

16. Add <CartListData> of recommendations.
17. Calculate the distance between source and destination.
18. Add <CarlistOptions> component.
19. Then add <CartlistItems> component to separetly design each car options.
20. Add distance prop to make update each and every recommendations price updated according to calculated distance.


## FEATURES->

1. GOOGLE_API_KEY is used when we use api in api.
2. NEXT_API_KEY is used in public use.
