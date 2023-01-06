require 'i18n/tasks/scanners/file_scanner'
class ScanResourceFormLabels < I18n::Tasks::Scanners::FileScanner
  include I18n::Tasks::Scanners::OccurrenceFromPosition

  # @return [Array<[absolute key, Results::Occurrence]>]
  def scan_file(path)
    text = read_file(path)
    text.scan(/^\s*<%= f(?:orm){0,1}.label :(.+?)[, ](?:.*?)%>$/).map do |attribute|
      occurrence = occurrence_from_position(
          path, text, Regexp.last_match.offset(0).first)
      model = File.dirname(path).split('/').last
      # p "================"
      # p model
      # p attribute
      # p ["activerecord.attributes.%s.%s" % [model.singularize, attribute.first], occurrence]
      # p "================"
      ["activerecord.attributes.%s.%s" % [model.singularize, attribute.first], occurrence]
    end
  end
end

I18n::Tasks.add_scanner 'ScanResourceFormLabels'
