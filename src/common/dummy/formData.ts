const formData = {
  accType: [
    { value: 'owner', label: 'Собственник' },
    { value: 'agent', label: 'Агент' }
  ],
  adType: [
    { value: 'sell', label: 'Продажа' },
    { value: 'rent', label: 'Аренда' }
  ],
  building: [
    { value: 'flat', label: 'Квартира' },
    { value: 'house', label: 'Дом' },
    { value: 'commercial', label: 'Коммерческая недвижимость' },
    { value: 'plot', label: 'Участок' },
    { value: 'countryHouse', label: 'Дача' },
    { value: 'room', label: 'Комната' },
    { value: 'garage', label: 'Гараж' }
  ],
  rooms: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: 'more_5', label: '5 и более' },
    { value: 'free_layout', label: 'свободная планировка' }
  ],
  series: [
    { value: 'elit', label: 'элитка' },
    { value: 'individ', label: 'индивид. планировка' },
    { value: '108_series', label: '108 серия' }
  ],
  heating: [
    { value: 'central', label: 'центральное' },
    { value: 'gas', label: 'на газу' },
    { value: 'electric', label: 'электрическое' },
    { value: 'mix', label: 'смешанное' }
  ],
  buildingType: [
    { value: 'brick', label: 'Кирпич' },
    { value: 'panel', label: 'Панельное' },
    { value: 'mono', label: 'Монолит' },
    { value: 'other', label: 'Другое' }
  ]
}

export default formData
