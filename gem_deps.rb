require 'bundler'
require 'json'

    def add_to_dep(dep,top_level)
      exists = top_level.key?("#{dep.name}")
      if !exists
        top_level.merge!("#{dep.name}" => "#{dep.requirement.requirements.join}")
      end  
    end


    deps = Bundler::Definition.build('Gemfile',nil,nil).
       dependencies.each_with_object(Hash.new { |h,k| h[k] = {} }) do |dep,obj| 
         dep.groups.each do |g|
           add_to_dep(dep,obj[g])
         end
    end

File.write("gemfile.json", JSON.pretty_generate(deps)+"\n")
