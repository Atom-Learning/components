const navigationStructure = {
  overview: [],
  theme: [],
  components: {}
}
const nestedNavigationCategories = {
  components: [
    'Overview',
    'Layout',
    'Content',
    'Navigation',
    'Form primitives',
    'Form fields',
    'Media',
    'Surfaces',
    'Feedback',
    'Utilities',
    'Primitives'
  ]
}

const sortWithinSource = (categories) => (a, b) =>
  // sort by category name
  categories.indexOf(a.category) - categories.indexOf(b.category) ||
  // sort by priority within that category, default to compare against high number
  a.priority - (b.priority || 99)

const groupByCategory = (accumulator, page) => {
  // default to void to not render category name
  const { category = 'void' } = page
  return {
    ...accumulator,
    [category]: [...(accumulator[category] || []), page]
  }
}

export const transformNavigationStructure = (
  items: [string, { category?: string }[]][]
): any => {
  const navigation = { ...navigationStructure }

  items.forEach(([source, pages]) => {
    const sourceHasCategories = pages.some((page) => page.category)

    navigation[source] = sourceHasCategories
      ? pages
          .sort(sortWithinSource(nestedNavigationCategories[source]))
          .reduce(groupByCategory, {})
      : pages
  })

  return navigation
}
