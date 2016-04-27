# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Car.create!([
  {
    make: 'BMW',
    model: 'M1',
    year: '1980'
  },
  {
    make: 'BMW',
    model: '740i',
    year: '2016'
  },
  {
    make: 'Ferrari',
    model: 'Testarossa',
    year: '1990'
  },
  {
    make: 'Porsche',
    model: '911',
    year: '1992'
  },
  {
    make: 'Ford',
    model: 'Taurus',
    year: '2005'
  },
])
