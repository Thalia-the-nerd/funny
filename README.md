# Funny

# Important: EDUCATIONAL ONLY!!!!!! Make sure follow the rules i do not take any responibility for action done with this code my only goal is to educate and with that please be responsiable with the code provided my goal is not to assist in the bypassing of security restrictions.
#
#
# By Scrolling Down you agree to the above ^
#
#
#
#
#



# How to Install Any Application

## You Can install any application easy by just downloading the .zip and unziping the .zip (DO NOT DISTRIBUTE)

Follow these steps to manually mount a DMG file in read-only mode on macOS.

## 1. Attach the Disk Image (without mounting)

```sh
hdiutil attach ~/Downloads/funnyA.dmg -nomount
```
- Note the output device node (e.g., `/dev/disk3s1`).

## 2. Create a Mount Point

```sh
if [ -d "$HOME/mnt" ]; then
  echo "you did this already :3 go to the next step."
else
  mkdir "$HOME/mnt"
fi
```

## 3. Mount the Disk Image (Read-Only)

```sh
mount -t apfs -o rdonly /dev/disk3s1 ~/mnt
```
- Replace `/dev/disk3s1` with the device node from step 1 if different.

You should now see the contents of the DMG mounted on the desktop.


# Installing Homebrew and Java without sudo access

# Homebrew Installation (User Directory)

Follow these steps to install Homebrew in your home directory (no sudo required):

1. **Create a directory for Homebrew:**
   ```sh
   mkdir -p $HOME/.homebrew
   ```

2. **Download and extract Homebrew:**
   ```sh
   curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C $HOME/.homebrew
   ```

3. **Add Homebrew to your PATH:**
   ```sh
   echo 'eval "$($HOME/.homebrew/bin/brew shellenv)"' >> ~/.zshrc
   ```

4. **Reload your shell configuration:**
   ```sh
   source ~/.zshrc
   ```

5. **Verify Homebrew installation:**
   ```sh
   brew --version
   ```

---

**Note:**
- If you see `dirty` in the version (e.g., `Homebrew 4.5.2-dirty`), it means you installed from the latest master branch, not a tagged release. This is normal and does not affect functionality.
- For a clean version string, use the official install script:
  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```


## Installing Java

### Option 1: Using SDKMAN

1. Install SDKMAN:
```bash
curl -s "https://get.sdkman.io" | bash
```

2. Source SDKMAN:
```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

3. Install Java 17:
```bash
sdk install java 17.0.9-tem
```

4. Verify Java installation:
```bash
java -version
```

### Option 2: Using Homebrew

1. Install Java 17 with auto-update disabled:
```bash
HOMEBREW_NO_AUTO_UPDATE=1 brew install openjdk@17
```

2. Verify Java installation:
```bash
java -version
```

## Troubleshooting

If you encounter any issues:

1. Make sure your PATH is correctly set by checking:
```bash
echo $PATH
```

2. If Java is not found, try sourcing your shell configuration again:
```bash
source ~/.zshrc
```

3. For Homebrew issues, try:
```bash
brew doctor
```

## Notes

- These instructions are specifically for users without sudo access
- The installations are performed in the terminal
- Make sure to restart your terminal after making PATH changes


## installing python without sudo access
just install Visual Studio Code and the python extension in it
