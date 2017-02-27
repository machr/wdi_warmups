
def leet_speak(input)
  leet = input.gsub(/[aeio]/, 'a'=>'4', 'e'=>'3', 'i'=>'1', 'o'=>'0')
  puts leet
end

# Enter the loop!
loop do
  # Get input from user
  puts "Talk to Daniel"
  input_text = gets.chomp.to_s

  # Call function if Bro is the first word
  if input_text.split.first == "Bro,"
    leet_speak(input_text)
  # Otherwise carry on

  elsif input_text == input_text.upcase
    puts "Whoa, chill out!"

  elsif input_text.include? "?"
    puts "Sure."

  elsif input_text.empty?
    puts "Fine! Be that way!"

  elsif input_text == "Goodbye"
    break

  else
    puts "Whatever"
  end

end
