## Quantumult X Gateway
This document describes how to configure Quantumult X as gateway for other devices on the same LAN.

### Gateway
* Quantumult X Tunnel is always running in the gateway mode.
* Quantumult X Tunnel DNS handler: **198.19.0.3**.

### Gateway for other devices on the same LAN
* Quantumult X minimum version 1.0.17.
* Assuming the original LAN settings:
  * LAN IP range: **192.168.2.1/24**.
  * LAN router: **192.168.2.1**.
  * Device (call it D-GW) that installed Quantumult X will works as the gateway: **192.168.2.99**.
  * Device (call it D-ATV) that its traffic will go through Quantumult X Tunnel: **192.168.2.66**.
* Setup guide:
  1. Turn on IP forwarding for device D-GW.  
Since iOS sanboxed app has no such privilege, you should turn on manually.  
If the device (D-GW) is a M1 chip Mac then it is simple, or you'll have to find other ways on your own:
     ```bash
     sudo sysctl -w net.inet.ip.forwarding=1
     ```
  2. Manully update IP settings only for device D-ATV:
     * Configure IP: Manual.
     * IP Address: Same as the orginal.
     * Subnet Mask: Same as the orginal.
     * Router: ***192.168.2.99*** (Update it using D-GW LAN IP).
     * DNS: ***198.19.0.3*** (Update it using Quantumult X Tunnel DNS handler).

### Notice
* Since Quantumult X is mainly targeted on iOS devices with NE (Network Extension) memory limitations, the thoughput as gateway for LAN devices maybe limited in version 1.0.17.  
If you concerns about the maximum network throughput of your LAN devices you can wait for the later versions that will optimize for M1 chip Mac (iOS apps on M1 chip Mac has no NE memory limitations).
