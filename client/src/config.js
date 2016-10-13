// development
const serverConfig = {
    baseUrl: 'http://localhost:4370/API',
    queryParam: 'agencyName'
};

// navbar links
const links = [
  {
    title: 'Oregon AGOL',
    link:  'http://geo.maps.arcgis.com/home/index.html'
  },
  {
    title: 'Docs',
    link:  'http://navigator.state.or.us/agol/docs/'
  }
];

// portal specific
const portalLinks = {
    portalUrl: "http://geo.maps.arcgis.com",
    loginUrl: "https://geo.maps.arcgis.com/home/signin.html",
    rootUrl: "http://geo.maps.arcgis.com/sharing/rest",
    detailsUrl: "http://geo.maps.arcgis.com/home/item.html"
};

// acceptable item types in gallery
const itemTypes = ['Web Mapping Application'];

// mapping of URL to agency abbr if they differ
// special case
const urlmap = {
  'ODOT' : 'OregonDOT'
};

export { serverConfig, links, portalLinks, itemTypes, urlmap };
