require 'i18n/tasks/scanners/file_scanner'
class ScanModelEnums < I18n::Tasks::Scanners::FileScanner
  include I18n::Tasks::Scanners::OccurrenceFromPosition

  # @return [Array<[absolute key, Results::Occurrence]>]
  def scan_file(path)
    result = []
    text = read_file(path)
  
    text.scan(/enum\s([a-zA-Z]*?):\s\{(.*)}, _prefix: true$/).each do |prefix, body|
      occurrence = occurrence_from_position(path, text, 
                                              Regexp.last_match.offset(0).first)
  
      body.scan(/(\w+):/).flatten.each do |attr|
        model = File.basename(path, ".rb")
        name = "#{prefix}_#{attr}" 
        result << ["activerecord.attributes.#{model}.#{name}", occurrence]
      end
    end
    result
  end
end

I18n::Tasks.add_scanner 'ScanModelEnums'