// Number of Square fect
export const data = [
  { id: 1, value: "", option: "Select your feet", disabled: true },
  { id: 2, value: 1, option: "500-1000", disabled: false },
  { id: 3, value: 2, option: "1000-2000", disabled: false },
  { id: 4, value: 3, option: "2000-3000", disabled: false },
  { id: 5, value: 4, option: "3000-4000", disabled: false },
  { id: 6, value: 5, option: "4000-5000", disabled: false },
];

export const services = [
  { value: 1, label: "services  1" },
  { value: 2, label: "services  2" },
  { value: 3, label: "services  3" },
  { value: 4, label: "services  4" },
];
export const timeSlotsData = [
  {
    id: 1,
    value: "8:00",
    vendors: [
      {
        id: 1,
        name: "Amal",
        is_available: true,
        service: [
          {
            id: 1,
            name: "Landscaping"
          }
        ]
      },
      {
        id: 2,
        name: "Sunil",
        is_available: false,
        service: [
          {
            id: 2,
            name: "service 2"
          }
        ]
      },
      {
        id: 3,
        name: "kamal",
        is_available: true,
        service: [
          {
            id: 1,
            name: "Landscaping"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    value: "8:30",
    vendors: [
      {
        id: 1,
        name: "Amal",
        is_available: true,
        service: [
          {
            id: 1,
            name: "Landscaping"
          }
        ]
      },
      {
        id: 2,
        name: "Sunil",
        is_available: true,
        service: [
          {
            id: 2,
            name: "service 2"
          }
        ]
      },
      {
        id: 3,
        name: "kamal",
        is_available: false,
        service: [
          {
            id: 1,
            name: "Landscaping"
          }
        ]
      }
    ]
  }
];