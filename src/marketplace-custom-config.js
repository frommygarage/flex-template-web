/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'Delivery available',
    label: 'Delivery available',
  },
   {
    key: 'Accessories included',
    label: 'Accessories included',
  }, 
];

export const categories = [
{key: 'Electronics', label: 'Electronics'},
{key: 'Outdoor & Sports Equipment', label: 'Outdoor & Sports Equipment'},
{key: 'Home & Garden Equipment', label: 'Home & Garden Equipment'}];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits

export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
