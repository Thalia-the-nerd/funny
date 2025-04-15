# funny
funny
###### important EDUCATIONAL ONLY!!!!!! DO NOT DO BAD STUFF follow the rules
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
