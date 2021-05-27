# README

## Development Environment

This is a [Rails](https://rubyonrails.org/) app.

**New to Rails?** I highly recommend the video "Rails 5: The Tour" on
<https://rubyonrails.org/> as an introduction. [Rails
Guides](https://guides.rubyonrails.org/) has a getting started guide as well as
detailed guides about other Rails components, like Active Record and routing.

### Ruby

The first thing you'll need is the correct version of Ruby. We track this in the
`.ruby-version` file, and tools like [rbenv](https://github.com/rbenv/rbenv) can
use that file to switch to the correct version.

We recommend installing [rbenv](https://github.com/rbenv/rbenv) and using it to
install the correct version. Installation instructions can be found in the rbenv
README.

Once rbenv is installed, you'll want to install the correct ruby version with
something like `rbenv install 2.7.1`.

### Bundler

We use [Bundler](https://bundler.io/) to manage our ruby gems. You'll probably
need to install this gem. If you used rbenv to install Ruby, you should be able
to run `gem install bundler` without sudo and bundler should be installed to the
correct location.

### Dependencies

After Bundler is installed, you can use it to install our dependencies with
`bundle install`. Our dependencies are tracked in `Gemfile` and `Gemfile.lock`.

### Run the App

After dependencies are installed with Bundler, you can run the app in
development mode with `bundle exec rails server`. The `bundle exec` part isn't
always required, but will ensure you use the correct version of dependencies in
case there are multiple versions installed.

Once the server is running, you can open it in a browser at <http://127.0.0.1:3000>.


