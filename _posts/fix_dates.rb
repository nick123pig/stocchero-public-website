file_names = Dir["/Users/nick123pig/Sites/stocchero.net/_posts/*.md"].collect

file_names.take(2).each do |file_name|
  text = File.read(file_name)

  name_minus_path = file_name.gsub("/Users/nick123pig/Sites/stocchero.net/_posts/","")

  new_contents = text.gsub(/created: ?\d+/, "created: #{name_minus_path[0...10]}")

  # To merely print the contents of the file, use:
  puts "replacing #{new_contents} in #{file_name}"

  # # To write changes to the file, use:
  # File.open(file_name, "w") {|file| file.puts new_contents }
end