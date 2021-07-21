**New to Rails?** Checkout the video "Rails 5: The Tour" on <https://rubyonrails.org/> as an introduction.

[Rails Guides](https://guides.rubyonrails.org/) has a getting started guide 
as well as detailed guides about other Rails components,
like Active Record and routing.

|<a href="https://www.ruby-lang.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" width="120" alt="Ruby" /></a>|<a href="https://rubyonrails.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" height="50" alt="Ruby on Rails" /></a>|<a href="https://nodejs.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="150" alt="Node JS" /></a>|<a href="https://tailwindcss.com/"><img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg" width="450" alt="Tailwind CSS" /></a>|<a href="https://jquery.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg" width="180" alt="jQuery" /></a>|<a href="https://webpack.js.org/"><img src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.svg" width="80" alt="webpack"/></a>|
|:-:|:-:|:-:|:-:|:-:|:-:|
| ![ruby version](https://img.shields.io/badge/ruby-3.0.1-brightgreen) | ![rails version](https://img.shields.io/badge/rails-6.1.4-brightgreen) | ![node version](https://img.shields.io/badge/node-12.22.3-brightgreen) | ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/tailwindcss) | ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/jquery) | ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/webpack) |
||![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/i18n-js)||![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/postcss) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/@fortawesome/fontawesome-free)|![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/@rails/ujs)|![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/@rails/webpacker) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/dev/webpack-dev-server) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/opensourcecatholic/marriage-booklet/webpack-cli)|

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/opensourcecatholic/marriage-booklet/Verify)
<a href="https://translate.johnromanodorazio.com/engage/marriage-booklet/">
<img src="https://translate.johnromanodorazio.com/widgets/marriage-booklet/-/svg-badge.svg" alt="Stato traduzione" />
</a>


# Setting up the Development environment

- 🧮 [Set up the Database](#set-up-the-database)
- 🍴 [Clone a fork of the project repository](#clone-a-fork-of-the-project-repository)
    - 🧰 [PostgreSQL in a docker container](#postgresql-in-a-docker-container)
- ♦️ [Install Ruby](#install-ruby)
    - 🧪 [Test for the correct version of ruby](#test-for-the-correct-version-of-ruby)
- 🔡 [Install Bundler](#install-bundler)
- 💎 [Install ruby gem dependencies](#install-ruby-gem-dependencies)
    - 🔧 [Optionally patch webpacker/dev-server-runner.rb](#optionally-patch-webpackerdev-server-runnerrb)
- 🌥️ [Check your environment](#check-your-environment)
- 📈 [Load the database schema](#load-the-database-schema)
- 📑 [NodeJS dependencies](#nodejs-dependencies)
    - 🎱 [Install node dependencies](#install-node-dependencies)
- 🌩️ [Compile assets](#compile-assets)
- ⚛️ [Run the App](#run-the-app)

### Set up the Database
Since the application uses a PostgreSQL database, you will need to have **PostgreSQL** >= v9.3 installed (`sudo apt install postgresql libpq-dev`) and running (`sudo service postgresql start`). If you prefer to spin up a docker container for PostgreSQL, skip ahead to [Clone a fork of the project repository](#clone-a-fork-of-the-project-repository), then make sure to include the steps from [PostgreSQL in a docker container](#postgresql-in-a-docker-container).

> _If you are installing **PostgreSQL** for the first time, a default user `postgres` will be created, and will be locked._
> _You will need to set a password for this user: first run `sudo -u postgres psql template1`, then at the Postgres CLI type `\password`._
> _You will be prompted for the new password twice, after which you can exit with `CTRL-D`._
> _Edit the `pg_hba.conf` file (path `/etc/postgresql/12/main/pg_hba.conf`, according to your Postgres version) and change "peer" to "md5" for both the `postgres` user and `all` users:_
> ```diff
> # Database administrative login by Unix domain socket
> -local      all     postgres     peer
> +local      all     postgres     md5
> 
> # TYPE  DATABASE        USER            ADDRESS                 METHOD
> 
> # "local" is for Unix domain socket connections only
> -local   all             all                                     peer
> +local   all             all                                     md5
> ```
> 
> _Restart the **PostgreSQL** service `sudo service postgresql restart` and test that the password is working: `psql -U postgres`._
> _You should be prompted for the password, and it should be accepted as you set it in the previous steps._

Let's create a database user `marriage_booklet` for our application: 
```bash
sudo createuser -U postgres -d -e -E -l -P -r -s marriage_booklet
```

You'll be prompted twice for a password for the new user, then you will be prompted for the `postgres` user password.
You should then see something like this:
```sql
SELECT pg_catalog.set_config('search_path', '', false);
CREATE ROLE marriage_booklet PASSWORD '[password-hash-here]' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN;
```

Test that you can log into the **PostgreSQL CLI** as the new user: `psql -U marriage_booklet template1`.

Let's create an environment variable with the database password: edit your `~/.bash_profile` or `~/.bashrc` and add these lines at the end:
```bash
export MARRIAGE_BOOKLET_DATABASE_USER="marriage_booklet"
export MARRIAGE_BOOKLET_DATABASE_PASSWORD="[password-here]"
```

Close your terminal and open a new terminal for the environment variable to be picked up.
Double check that the environment variables are available: 

```bash
echo $MARRIAGE_BOOKLET_DATABASE_USER
echo $MARRIAGE_BOOKLET_DATABASE_PASSWORD
```

### Clone a fork of the project repository

As an example, we will clone the **marriage-booklet** project to our **home** directory under a **development** subdirectory.
Please adjust any of the following instructions based on the folder you choose to develop under.
We will actually clone a fork of the project, seeing that any patches we would like to contribute
will be developed as branches on a fork and then submitted as PR's against the main repo.

So as a first step, from the Github repo https://github.com/opensourcecatholic/marriage-booklet,
click on "fork" at the top right hand side of the screen. Then clone the fork:

```bash
cd ~
mkdir development
cd development
git clone git@github.com:YourGithubUsername/marriage-booklet.git
cd marriage-booklet
```

(Substitute _YourGithubUsername_ with your Github username or with whatever url your fork refers to, such as an organization perhaps).
The project will now be cloned in a **marriage-booklet** subfolder of the **development** folder.

##### PostgreSQL in a docker container
A `docker-compose.yml` file has been included in the repo, if you prefer to use a docker container as your **PostgreSQL** instance. First, create (in the project's main directory, alongside docker-compose.yml) an `.env` file with the following environment variables:
```diff
MARRIAGE_BOOKLET_DATABASE_USER="marriage_booklet"
MARRIAGE_BOOKLET_DATABASE_PASSWORD="[password-here]"
ADMINER_PORT=8080
```

An instance of [Adminer](https://www.adminer.org/) has been included in the **docker compose** file, so as to offer a tool that can help inspect the database and the tables.
You may change the port in the `.env` file to your liking. If you do not supply the `ADMINER_PORT` environment variable,
the adminer instance will default to port **8080**.

Now running `docker-compose up` should spin up the **PostgreSQL** instance, which will become available on the unix socket.

And you should get the **Adminer** interface at `http://localhost:[ADMINER_PORT]` (for example, `http://localhost:8080`).
You can log into the adminer interface with:

|          |          |
|:---------|:---------|
|System    |PostgreSQL|
|Server    |db        |
|Username  |[MARRIAGE_BOOKLET_DATABASE_USER]    |
|Password  |[MARRIAGE_BOOKLET_DATABASE_PASSWORD]|
|Database  |marriage_booklet_development        |

(Switch out Username and Password with whatever you put in the `.env` file.)

### Install Ruby

The first thing you'll need is the correct version of Ruby. We track this in the
`.ruby-version` file, and tools like [rbenv](https://github.com/rbenv/rbenv) can
use that file to switch to the correct version.

We recommend installing [rbenv](https://github.com/rbenv/rbenv) and using it to
install the correct version. Installation instructions can be found in the rbenv
README. An example is included here also. If you already have `rbenv` installed
you can skip ahead to [Test for the correct version of ruby](#Test-for-the-correct-version-of-ruby)

***

_An example installation for Ubuntu 20.04 in a WSL2 instance on Windows, using **rbenv-installer**:_
```bash
~$ curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
~$ nano ~/.profile
```
_Paste this at the end of the .profile or .bash_profile file:_
```bash
# set PATH so it includes ~/.rbenv/shims if it exists
if [ -d "$HOME/.rbenv/shims" ] ; then
    PATH="$HOME/.rbenv/shims:$PATH"
fi

# set PATH so it includes ~/.rbenv/bin if it exists
if [ -d "$HOME/.rbenv/bin" ] ; then
    PATH="$HOME/.rbenv/bin:$PATH"
fi
```
_(`CTRL-O` to save and `CTRL-X` to exit, if using **nano**.)_

_Close the terminal window and open a new instance, so that the **PATH** variable is reinstantiated._
_Verify the state of the installation:_
```bash
~$ curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-doctor | bash
```

_You should see a message along the lines of:_
```bash
Checking for `rbenv' in PATH: ~/.rbenv/bin/rbenv
Checking for rbenv shims in PATH: not found
  The directory `~/.rbenv/shims' must be present in PATH for rbenv to work.
  Please run `rbenv init' and follow the instructions.

Checking `rbenv install` support: ~/.rbenv/plugins/ruby-build/bin/rbenv-install (ruby-build 20210611-1-g1b477ae)
Counting installed Ruby versions: none
  There aren't any Ruby versions installed under `~/.rbenv/versions'.
  You can install Ruby versions like so: rbenv install 3.0.1
Checking RubyGems settings: OK
Auditing installed plugins: OK
```

_If you run `rbenv init` you may see a message like this:_
```bash
# Load rbenv automatically by appending
# the following to ~/.bashrc:

eval "$(rbenv init - bash)"
```

_It seems that ~/.bashrc can be read before ~/.profile, because when adding the above to .bashrc I was still getting an error "command rbenv not found"._
_So I had to give the path to **rbenv** in my .bashrc:_
```bash
nano ~/.bashrc
```
_Paste this at the bottom:_
```bash
eval "$(~/.rbenv/bin/rbenv init - bash)"
```
_(`CTRL-O` to save and `CTRL-X` to exit, if using **nano**.)_

_You should now be able to install a ruby version._
```bash
~$ rbenv install 3.0.1
```
_(If this results in an error "No acceptable C compiler found in PATH", you must install **build-essential**, make sure you have all necessary dependencies installed:_
```bash
~$ sudo apt update
~$ sudo apt install build-essential libssl-dev zlib1g-dev libsqlite3-dev
```
_Then try `rbenv install 3.0.1` again.)_

_You should see output along these lines:_
```bash
Installing ruby-3.0.1...
Installed ruby-3.0.1 to ~/.rbenv/versions/3.0.1
```
***

##### Test for the correct version of ruby

Now, running `ruby --version` from within the application directory should give you something like `ruby 3.0.1p64 (2021-04-05 revision 0fb782ee38) [x86_64-linux]`.
You probably won't be able to run the `rails` command yet, until you have installed the rails gem. However we use **bundler** to manage our ruby gems, so you will have to continue through the next two steps before being able to check your `rails --version`.

### Install Bundler

We use [Bundler](https://bundler.io/) to manage our ruby gems. You'll probably
need to install this gem. If you used rbenv to install Ruby, you should be able
to run `gem install bundler` without sudo and bundler should be installed to the
correct location.

### Install ruby gem dependencies

After Bundler is installed, you can use it to install our dependencies with
`bundle install`. Our dependencies are tracked in `Gemfile` and `Gemfile.lock`.

(Make sure you are in the project directory, wherever you cloned your fork to,
for example `~/development/marriage-booklet/`.)

Note that any time the `Gemfile` is updated with new dependencies,
`bundle install` will need to be run again to install the new dependencies.
If you haven't run `bundle install` after new dependencies are defined,
you will probably get an error message when trying to run `bundle exec rails server` (see below),
similar to:

```ruby
Could not find rack-proxy-0.7.0 in any of the sources
Run `bundle install` to install missing gems.
```

##### Optionally patch webpacker/dev-server-runner.rb

Since we are conservatively using the latest **stable** version of the `webpacker` gem, and not the latest **beta** version, you can optionally patch `lib/webpacker/dev_server_runner.rb` so as to allow you to use the `webpack-serve` yarn package instead of the `webpack-dev-server` yarn package when running the `bin/webpack-dev-server` binstub. This patch will already be applied in the **beta** version but it wasn't applied yet for the last **stable** version, so we can apply it manually:

```bash
cd $(rbenv prefix)/lib/ruby/gems/3.0.0/gems/webpacker-5.4.0
curl https://github.com/rails/webpacker/commit/31b7a6f31e38d0d45b0e2ab162f28db1afc5ffac.patch | patch -p1
```

> _This patch might fail on the second file that it patches, since the `test/dev_server_runner_test.rb` file has slightly changed since the patch was produced._
> _You can simply change the relevant lines manually following this diff:_
> ```diff
> --- a/test/dev_server_runner_test.rb    2021-07-17 11:55:35.930000000 +0200
> +++ b/test/dev_server_runner_test.rb    2021-07-17 12:00:16.190000000 +0200
> @@ -13,13 +13,13 @@
>    end
> 
>    def test_run_cmd_via_node_modules
> -    cmd = ["#{test_app_path}/node_modules/.bin/webpack-dev-server", "--config", "#{test_app_path}/config/webpack/development.js"]
> +    cmd = ["#{test_app_path}/node_modules/.bin/webpack", "serve", "--config", "#{test_app_path}/config/webpack/development.js"]
> 
>      verify_command(cmd, use_node_modules: true)
>    end
> 
>    def test_run_cmd_via_yarn
> -    cmd = ["yarn", "webpack-dev-server", "--config", "#{test_app_path}/config/webpack/development.js"]
> +    cmd = ["yarn", "webpack", "serve", "--config", "#{test_app_path}/config/webpack/development.js"]
> 
>      verify_command(cmd, use_node_modules: false)
>    end
> ```


### Check your environment

You should now be able to see the version of rails when running `bundle exec rails --version`, with an output of `Rails 6.1.3.2`.
(Since the **rails** gem is made available through **bundler**, it needs to be invoked with `bundle exec`.
In order to be able to invoke `rails --version` directly, you can run `bundle binstubs rails` which will install an executable to the `bin` folder which is  simply a wrapper for the `bundle exec rails` commands.)

You can check your rails environment with `bundle exec rails about`. You should get an output something like:

```bash
About your application's environment
Rails version             6.1.3.2
Ruby version              ruby 3.0.1p64 (2021-04-05 revision 0fb782ee38) [x86_64-linux]
RubyGems version          3.2.15
Rack version              2.2.3
Middleware                Webpacker::DevServerProxy, ActionDispatch::HostAuthorization, Rack::Sendfile, ActionDispatch::Static, ActionDispatch::Executor, ActiveSupport::Cache::Strategy::LocalCache::Middleware, Rack::Runtime, Rack::MethodOverride, ActionDispatch::RequestId, ActionDispatch::RemoteIp, Sprockets::Rails::QuietAssets, Rails::Rack::Logger, ActionDispatch::ShowExceptions, ActionDispatch::DebugExceptions, ActionDispatch::ActionableExceptions, ActionDispatch::Reloader, ActionDispatch::Callbacks, ActiveRecord::Migration::CheckPending, ActionDispatch::Cookies, ActionDispatch::Session::CookieStore, ActionDispatch::Flash, ActionDispatch::ContentSecurityPolicy::Middleware, ActionDispatch::PermissionsPolicy::Middleware, Rack::Head, Rack::ConditionalGet, Rack::ETag, Rack::TempfileReaper
Application root          ~/development/marriage-booklet
Environment               development
Database adapter          postgresql
Database schema version   0
```

### Load the database schema
Run `bundle exec rails db:setup`. This will create the `development` and `test` databases and load the current `schema`.

### NodeJS dependencies

You will also have to install node dependencies with `yarn install` before proceeding,
in order for `rails/webpacker` to function correctly. **`webpack`** is in fact a node package.
Also the `tailwindcss` framework that we use depends on node.

The `tailwindcss@2.1.4` framework however requires that you have a version of `node >= 12.13.0`.

Check your version of node: `node --version`. If it's less than `12.13.0`,
then we recommend to use `nvm` (and optionally `avm`) to manage the version of **node** for the project.

We track the version of **node** required for the project both in the `.nvmrc` file and in the `.node-version` file:

* `.nvmrc` can be used by `nvm` to automatically detect the desired version to be installed, when issuing `nvm install`, without having to manually specify the version of node to install
* `.node-version` can be used by `avm` to switch automatically to the correct version of node as soon as you enter the directory (and optionally install the version of node if not yet installed)

If you have already installed `nvm`, `avm` and `yarn`, you may skip ahead to [Install node dependencies](#install-node-dependencies).

**How to install `nvm` (and optionally `avm`):**

You can follow the [instructions in the README](https://github.com/nvm-sh/nvm#installing-and-updating) of the nvm github repo.
Basically these are the steps:

1. Install nvm
   ```bash
   $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
   ```

2. Check if the installation is successful
   ```bash
   $ command -v nvm
   ```
   This should output `nvm` if the installation was successful.
   If instead you see no output, try closing your terminal and opening again.
   Since **nvm** writes to your `~/.bashrc` or `~/.bash_profile` or `~/.profile` 
   so as to load **nvm** when starting a terminal session, 
   you may need to start a fresh terminal session in order to load **nvm** correctly.

   > _In my case, I was getting **nvm** as output right away, but not when opening a new terminal._
   > _**nvm** had written to my `~/.bashrc`, which was not however getting picked up for a new terminal session._
   > _In cases like this you can either copy what **nvm** wrote to `~/.bashrc` and paste it into `~/.bash_profile`, commenting it out in `~/.bashrc`:_
   > ```bash
   > export NVM_DIR="$HOME/.nvm"
   > [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
   > [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
   > ```
   > _Or better yet, the correct fix in situations like this is probably [this one](https://serverfault.com/a/496513/271987). Basically just make sure that `~/.bash_profile` is loading `~/.bashrc`. Copy this into `~/.bash_profile`:_
   > ```bash
   > # include .bashrc if it exists
   > if [ -f "$HOME/.bashrc" ]; then
   >     . "$HOME/.bashrc"
   > fi
   > ```
   > _I wound up using this last solution, and leaving what **nvm** wrote to `~/.bashrc` in `~/.bashrc`._
   > _Now when loading a new terminal session, I am correctly seeing **nvm** as output when issuing `command -v nvm`._

3. Install the required version of **node**: while in the project directory, issuing `nvm install` should pick up on the version of node that we use from the `.nvmrc` file, and should give output something like this:
   ```bash
   Found '~/development/marriage-booklet/.nvmrc' with version <12.22.3>
   Downloading and installing node v12.22.3...
   Downloading https://nodejs.org/dist/v12.22.3/node-v12.22.3-linux-x64.tar.xz...
   ################################################################################################# 100,0%
   Computing checksum with sha256sum
   Checksums matched!
   Now using node v12.22.3 (npm v6.14.13)
   ```

4. You can optionally use `avm` to automatically switch to the correct version of node upon entering the project's directory.
   ***Note that this will probably require usage of Node 10 for first setup! (See [here](https://github.com/wbyoung/avn/issues/105)): `nvm install 10.24.1`***
   ```bash
   $ npm install -g avn avn-nvm avn-n
   $ avn setup
   ```
   Make sure you use **npm** and not **yarn** in this case, otherwise you will probably run into a lot of issues! If you get an `EACCESS` permissions error when running `avn setup`, it might not have succeeded in writing to your `~/.bash_profile` or `~/.profile`, in that case you'll have to manually edit and add this at the end: `[[ -s "$HOME/.avn/bin/avn.sh" ]] && source "$HOME/.avn/bin/avn.sh" # load avn`.

   Exit and restart the terminal, now when you `cd` into the `marriage-booklet` directory, you should automatically switch to the correct version of `node` for the project.

**How to install yarn**

Of course you also need to have `yarn` installed. You can check if you have **yarn** by issuing `yarn --version`.
This should give you something like `1.22.5`. If you don't have yarn, installing it is as simple as this:
```bash
npm install -g yarn
```

##### Install node dependencies

The node dependencies, managed by **yarn**, are defined in `package.json` and `yarn.lock`.
So now that you have all the tools in place, you should install the node dependencies
from the project directory if you haven't done so yet:
```bash
yarn install
```

_Optional: To fix "unmet peer dependency" warnings, issuing `yarn upgrade` might help to fix._
_This should update all of the packages to the highest possible version allowed in `package.json`,_
_while maintaining compatibility between the packages in the dependency tree._

**Refresh node dependencies**

When `package.json` and/or `yarn.lock' changes adding new dependencies, such as when pulling changes into your local environment from the remote repo in a team setting, be sure to keep your NPM packages up-to-date:

```bash
yarn install
```

### Compile assets
Now that yarn has installed webpacker, you should compile the `JS` and `CSS` assets for the application:
```bash
bundle exec rails webpacker:compile
```

If you're trying to refresh assets that have been previously compiled:
```bash
bundle exec rails webpacker:clobber
bundle exec rails webpacker:compile
```

### Run the App

After all dependencies are installed with Bundler and Yarn and assets have been compiled, 
you can run the app in development mode with `bundle exec rails server`.
If you first run `bin/webpack-dev-server` you will get real time compilation of assets.
For this to work it needs to be run before `bundle exec rails server`,
so that the rails server will know to pick up the assets from `webpack-dev-server`
rather than from precompiled assets.

The `bundle exec` part of `bundle exec rails server` isn't always required, 
but will ensure you use the correct version of dependencies 
in case there are multiple versions installed.

Once the server is running, you can open it in a browser at <http://127.0.0.1:3000> (or <http://localhost:3000>).

# Contributing

Check out the dedicated wiki page [Contributing a patch](https://github.com/opensourcecatholic/marriage-booklet/wiki/2-Contributing-a-patch) for more information.

If you contribute a patch that contains a user facing string, please don't hard code the string, but keep I18n in mind. See the dedicated wiki page [Handling i18n](https://github.com/opensourcecatholic/marriage-booklet/wiki/3-Handling-i18n) for more info.

# Translating

If you would like to contribute to the translations of the user facing strings in this project, you can do so by opening an issue requesting an account on the weblate server where translations take place.

Current state of translations:

<a href="https://translate.johnromanodorazio.com/engage/marriage-booklet/">
<img src="https://translate.johnromanodorazio.com/widgets/marriage-booklet/-/multi-auto.svg" alt="Stato traduzione" />
</a>
