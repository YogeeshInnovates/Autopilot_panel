from fastapi import APIRouter
from typing import List
from schemas import DeviceInfo
from usb_scanner import scan_usb
from dfu_scanner import scan_dfu
from bt_scanner import scan_bluetooth
import asyncio

router = APIRouter()

@router.get("/devices", response_model=List[DeviceInfo])
async def get_devices():
    # Run usb and dfu scans synchronously
    usb_devices = scan_usb()
    dfu_devices = scan_dfu()
    
    # Bluetooth scanning is async
    bt_devices = await scan_bluetooth()
    
    # Combine results and return
    return usb_devices + dfu_devices + bt_devices
