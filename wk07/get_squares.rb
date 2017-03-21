require "pry"
def get_square(array)
  squared_array = []
  array.map do |number|
    squared_array << ( number ** 2 )
  end
  squared_array.uniq.sort
end
binding.pry
