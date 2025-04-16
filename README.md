# funny
funny
# important EDUCATIONAL ONLY!!!!!! DO NOT DO BAD STUFF follow the rules i do not take any responibility for action done wioth this code my only goal is to educate and with that please be responsiable with the code provided my goal is not to assist in the bypassing of security restrictions DONT DO BAD THINGS KIDS
#
#
#
##
#
#
#5 dollars
#
#
#
#
#
#
##
#
#
#
#
#
#
# How to Install Any Application

Follow these steps to install an application from a `.dmg` file:

1. **Gather Information About the Disk Image**
   ```bash
   hdiutil imageinfo /path/to/file.dmg
   ```

2. **Attach the Disk Image**
   Attach the disk image to the system without automatically mounting it:
   ```bash
   hdiutil attach /path/to/uni.dmg -nomount
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

# Bypassing Firewall with VPN

Follow these steps to bypass a firewall using a VPN:

1. **Install Homebrew**
   Run the following command to install Homebrew (make sure to skip using `sudo`):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" --skip-sudo
   ```

2. **Install OpenConnect GUI**
   Use Homebrew to install the OpenConnect GUI:
   ```bash
   brew install --cask openconnect-gui
   ```

3. **Configure and Use the VPN**
   - Launch the OpenConnect GUI application.
   - Follow the application's instructions to connect to your VPN and bypass the firewall.


***(roblox + discord type applications use both previous commands)

# Download YouTube Videos Using yt-dlp

This guide provides a script to download YouTube videos using `yt-dlp`. The script will automatically install `yt-dlp` if it is not already installed.

## Instructions

1. **Run the Script**

   Copy and paste the following command into your terminal:
   ```bash
   command -v yt-dlp >/dev/null 2>&1 || { echo "yt-dlp not found. Installing..."; curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o yt-dlp && chmod +x yt-dlp && mv yt-dlp ~/bin/; } && read -p "Enter the YouTube video URL: " video_url && yt-dlp "$video_url"
   ```

2. **What the Script Does**
   - Checks if `yt-dlp` is installed.
   - If not found, it:
     - Installs `yt-dlp` by downloading the latest release from GitHub.
     - Makes the downloaded file executable.
     - Moves the file to the `~/bin/` directory.
   - Prompts you to input a YouTube video URL.
   - Downloads the video using `yt-dlp`.

3. **Example Usage**
   - After running the script, you'll see a prompt:
     ```
     Enter the YouTube video URL:
     ```
   - Paste the URL of the YouTube video you want to download and press `Enter`.

4. **Dependencies**
   - Ensure that `curl` is installed on your system.
   - Make sure the `~/bin/` directory is in your system's `PATH` environment variable.

Enjoy downloading your videos!


# Installing Homebrew and Java without sudo access

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

- These instructions are specifically for users without sudo access
- The installations are performed in user space
- Both methods should work, but SDKMAN is generally more reliable for Java installation
- Make sure to restart your terminal after making PATH changes


## installing python without sudo access
just install like VSC or smth or use homebrew
