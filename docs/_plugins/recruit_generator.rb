module Jekyll
  class RecruitGenerator < Generator
    def generate(site)
      site.data['recruits'].each do |recruit|
        site.pages << RecruitPage.new(site, site.source, '/recruit', recruit)
      end
    end
  end
  class RecruitPage < Page
    def initialize(site, base, dir, recruit)
      @site = site
      @base = base
      @dir = dir
      @name = "#{recruit['recruit_type']}/#{recruit['id']}.html"

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'recruit.html')
      self.data['json_ld_path'] = "#{recruit['recruit_type']}/#{recruit['id']}"
      self.data['description'] = "#{recruit['title']}の募集要項ページです。クロノスは常にワクワクする気持ちを大切にするやりがいや充実感を感じることができる仲間が集まる企業です。"
      recruit.each do |key, value|
        self.data[key] = value
      end
    end
  end
end