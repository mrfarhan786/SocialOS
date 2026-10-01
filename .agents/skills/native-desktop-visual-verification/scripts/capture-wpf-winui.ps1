<#
.SYNOPSIS
  Captures a screenshot of a running WPF/WinUI application's main window.
.DESCRIPTION
  Black-box helper for the native-desktop-visual-verification skill. Run the
  app first, then call this script with the process name. Treat this script
  as a black box — run it with -Help rather than reading/editing it unless
  something needs fixing.
.PARAMETER ProcessName
  The process name of the running app (without .exe), e.g. "App".
.PARAMETER OutPath
  Where to save the PNG screenshot.
#>
param(
    [switch]$Help,
    [string]$ProcessName,
    [string]$OutPath = "$env:TEMP\ui-capture.png"
)

if ($Help -or -not $ProcessName) {
    Write-Host "Usage: capture-wpf-winui.ps1 -ProcessName <name> [-OutPath <file.png>]"
    exit 0
}

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$proc = Get-Process -Name $ProcessName -ErrorAction SilentlyContinue | Select-Object -First 1
if (-not $proc) {
    Write-Error "No running process named '$ProcessName' found. Start the app first."
    exit 1
}

Add-Type @"
using System;
using System.Runtime.InteropServices;
public class Win32 {
    [DllImport("user32.dll")]
    public static extern bool GetWindowRect(IntPtr hWnd, out RECT rect);
    [DllImport("user32.dll")]
    public static extern bool SetForegroundWindow(IntPtr hWnd);
    public struct RECT { public int Left; public int Top; public int Right; public int Bottom; }
}
"@

[Win32]::SetForegroundWindow($proc.MainWindowHandle) | Out-Null
Start-Sleep -Milliseconds 300

$rect = New-Object Win32+RECT
[Win32]::GetWindowRect($proc.MainWindowHandle, [ref]$rect) | Out-Null
$width = $rect.Right - $rect.Left
$height = $rect.Bottom - $rect.Top

$bmp = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.CopyFromScreen($rect.Left, $rect.Top, 0, 0, $bmp.Size)
$bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)

Write-Host "Saved screenshot to $OutPath"
