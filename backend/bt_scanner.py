from bleak import BleakScanner
import asyncio

async def scan_bluetooth():
    devices = []
    try:
        found = await BleakScanner.discover(timeout=5.0)
        
        for d in found:
            devices.append({
                "type": "bluetooth",
                "address": d.address,
                "name": d.name or None
            })
    except Exception as e:
        devices.append({
            "type": "bluetooth",
            "name": f"Bluetooth scan error: {e}"
        })
    return devices
