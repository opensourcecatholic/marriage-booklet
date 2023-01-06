require 'i18n/tasks/scanners/file_scanner'
class ScanModelEnums < I18n::Tasks::Scanners::FileScanner
  include I18n::Tasks::Scanners::OccurrenceFromPosition

  # @return [Array<[absolute key, Results::Occurrence]>]
  def scan_file(path)
    result = []
    text = read_file(path)

    text.scan(/enum ([a-zA-Z]*?)\: \{ (.*?) \}\, _prefix: true$/).each do |prefix, body|
      occurrence = occurrence_from_position(path, text, Regexp.last_match.offset(0).first)
      model = File.basename(path, ".rb")
      #puts "model = #{model}, prefix = #{prefix}, body = #{body}"
      body.scan(/\b(\w+?)\b\:/).flatten.each do |attr|
        name = "#{prefix}_#{attr}" 
        #puts "attr = #{attr}, name = #{name}"
        result << ["activerecord.attributes.#{model}.#{name}", occurrence]
      end
    end
    result
  end
end

I18n::Tasks.add_scanner 'ScanModelEnums'
