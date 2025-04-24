# funny 

#please file issues thanx
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

# Bypassing Firewall with VPN

Follow these steps to bypass a firewall using a VPN:

1. **Install Homebrew (look bellow) **

2. **Install OpenConnect GUI**
   Use Homebrew to install the OpenConnect GUI:
   ```bash
   brew install vpn-slice
   ```

3. **Configure and Use the VPN**
   - Launch the application.
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
# MCDTweaks Bookmarklet Version

This is a bookmarklet version of MCDTweaks that allows you to use the tweaks without installing any browser extensions. This is particularly useful for school computers where extensions are blocked.

## How to Install

1. Create a new bookmark in your browser
2. Name it something like "MCDTweaks"
3. Copy the entire contents of the `bookmarklet.js` file
4. Paste it into the URL/location field of the bookmark

## How to Use

1. Go to the Miami Country Day School student portal
2. Click the "MCDTweaks" bookmark you created
3. The tweaks will be applied immediately
4. Three buttons will appear in the top-right corner:
   - "Toggle Dark Mode": Switches between light and dark modes
   - "Auto-Apply": Toggles whether the tweaks should automatically apply on page refresh
   - "Ultrawide Mode": Toggles ultrawide mode for better use of large screens

## Features

- Dark Mode toggle with persistence
- Auto-apply option to maintain settings across page refreshes
- Ultrawide Mode for better use of large screens
- Improved Messages page with grid layout
- Better Directory with card-based layout
- Old Assignment Center with improved layout
- Classes sorted by track
- Improved color scheme
- Better contrast
- Consistent styling across the portal

## Notes

- With Auto-Apply OFF: You'll need to click the bookmarklet each time you refresh the page
- With Auto-Apply ON: The tweaks will automatically apply when you refresh the page
- Your dark mode and ultrawide mode preferences will be remembered even when Auto-Apply is OFF
- This version includes most features from the full MCDTweaks
- Some advanced features may not be available in this version

## Troubleshooting

If the bookmarklet doesn't work:
1. Make sure you copied the entire code
2. Try creating the bookmark again
3. Ensure you're on the correct website
4. Try refreshing the page and clicking the bookmarklet again
5. If Auto-Apply isn't working, try turning it off and on again
6. If certain features aren't working, try refreshing the page


not commited yet but soon check https://github.com/aosceola27/MCDTweaks
