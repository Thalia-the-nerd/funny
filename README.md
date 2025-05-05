
# You Can install any application easy by just downloading the .zip and unziping the .zip
This could be pached by disallowing the downloading of .dmg files and simpily rm -rf ing any dmg then install stuff via Jamf


# How to Install Any Application

Follow these steps to install an application from a `.dmg` file:

1. **Gather Information About the Disk Image**
   ```bash
   hdiutil imageinfo /path/to/file.dmg
   ```

2. **Attach the Disk Image**
   Attach the disk image to the system without automatically mounting it:
   ```bash
   hdiutil attach /path/to/file.dmg -nomount
   ```

3. **Take Note of the Output**
   Save the output of the command to identify the attached disk (e.g., `/dev/disk4s1`).

4. **Create a Mount Point**
   Create a directory to serve as the mount point:
   ```bash
   mkdir ~/mnt
   ```

5. **Mount the Disk Image**
   Mount the disk image in read-only mode using the output from step 3:
   ```bash
   mount -t hfs -o rdonly /dev/disk4s1 ~/mnt
   ```

7. **Access the Contents**
   Open the mounted directory to access the application files:
   ```bash
   open ~/mnt
   ```

8. **Complete the Installation**
   Follow the application's installation instructions from the mounted directory.

# Make a network tunnel

Follow these steps to make a vpn using a VPN:

1. https://drive.google.com/file/d/1QzoazrjsxT1RGHcT4aEsrFo0xpXYi1bJ/view?usp=sharing donwnload + unzip

   Find some way to block the adding of VPN configuration.


# Installing Homebrew and Java without sudo access (java has no real threat as to do anything you need sudo and you can just block a list of mirrors for both applications)

## Installing Homebrew

1. Create a directory for Homebrew in your home folder:
```bash
mkdir -p $HOME/.homebrew
```

2. Download and extract Homebrew:
```bash
curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C $HOME/.homebrew
```

3. Add Homebrew to your PATH by adding this line to your `~/.zshrc`:
```bash
echo 'eval "$($HOME/.homebrew/bin/brew shellenv)"' >> ~/.zshrc
```

4. Reload your shell configuration:
```bash
source ~/.zshrc
```

5. Verify Homebrew installation:
```bash
brew --version
```

## Installing Java

### Option 1: Using SDKMAN (Recommended)

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
- The installations are performed in user space
- Both methods should work, but SDKMAN is generally more reliable for Java installation
- Make sure to restart your terminal after making PATH changes


## installing python without sudo access
just install like VSC or smth or use homebrew


