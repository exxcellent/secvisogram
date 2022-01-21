import minimalDoc from '../shared/minimalGenericCSAFDoc'

export default [
  {
    title: 'Optional test 6.2.2 detects unmatched last_affected entry',
    content: {
      ...minimalDoc,
      product_tree: {
        full_product_names: [
          {
            product_id: 'CSAFPID-9080700',
            name: 'Product A',
          },
        ],
      },
      vulnerabilities: [
        {
          product_status: {
            last_affected: ['CSAFPID-9080700'],
          },
        },
      ],
    },
    expectedNumberOfWarnings: 1,
  },

  {
    title: 'Optional test 6.2.2 accepts product_ids in remediation',
    content: {
      ...minimalDoc,
      product_tree: {
        full_product_names: [
          {
            product_id: 'CSAFPID-9080700',
            name: 'Product A',
          },
        ],
      },
      vulnerabilities: [
        {
          product_status: {
            last_affected: ['CSAFPID-9080700'],
          },
          remediations: [
            {
              product_ids: ['CSAFPID-9080700'],
              category: 'none_available',
              details: 'Some details',
            },
          ],
        },
      ],
    },
    expectedNumberOfWarnings: 0,
  },
]
