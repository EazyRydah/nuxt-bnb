export { default as HomeCard } from '../..\\components\\HomeCard.vue'
export { default as HomeRow } from '../..\\components\\HomeRow.vue'
export { default as ShortText } from '../..\\components\\ShortText.vue'

export const LazyHomeCard = import('../..\\components\\HomeCard.vue' /* webpackChunkName: "components_HomeCard" */).then(c => c.default || c)
export const LazyHomeRow = import('../..\\components\\HomeRow.vue' /* webpackChunkName: "components_HomeRow" */).then(c => c.default || c)
export const LazyShortText = import('../..\\components\\ShortText.vue' /* webpackChunkName: "components_ShortText" */).then(c => c.default || c)
