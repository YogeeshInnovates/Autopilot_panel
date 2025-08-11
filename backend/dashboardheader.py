from fastapi import APIRouter,HTTPException
from typing import List
from schemas import DeviceInfo,PairRequest,BluetoothConnectRequest
from usb_scanner import scan_usb
from dfu_scanner import scan_dfu
from bt_scanner import scan_bluetooth
import asyncio
 
from bleak import BleakClient,BleakScanner


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


@router.post("/pair")
async def pair_bluetooth_device(request: PairRequest):
    address = request.address
    try:
        async with BleakClient(address) as client:
            # connected = await client.is_connected()
            connected = client.is_connected  # if it's synchronous property
            if connected:
                return {"message": f"Successfully paired with {address}"}
            else:
                raise HTTPException(status_code=400, detail=f"Failed to connect to {address}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Pairing error: {str(e)}")



# @router.post("/bluetooth/connect")
# async def connect_bluetooth(address: str):
#     try:
#         async with BleakClient(address) as client:
#             connected = await client.is_connected()
#             if connected:
#                 return {"message": f"Successfully connected to {address}"}
#             else:
#                 raise HTTPException(status_code=400, detail=f"Failed to connect to {address}")
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Connection error: {e}")
@router.post("/bluetooth/connect")
async def connect_bluetooth(address: str):
    try:
        found_devices = await BleakScanner.discover(timeout=5.0)
        if not any(d.address == address for d in found_devices):
            raise HTTPException(status_code=404, detail=f"Device {address} not found during rescan")
        
        async with BleakClient(address) as client:
            connected = await client.is_connected()
            if connected:
                return {"message": f"Successfully connected to {address}"}
            else:
                raise HTTPException(status_code=400, detail=f"Failed to connect to {address}")
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Device {address} not found")

