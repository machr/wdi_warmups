require "pry"

class Coffee
  def initialize (type, extras, size, name)
    @type = type
    @extras = extras
    @size = size
    @name = name
  end

  def to_s
    "#{@name}'s #{@type}, #{@size}, #{@extras}"
  end

end
binding.pry
