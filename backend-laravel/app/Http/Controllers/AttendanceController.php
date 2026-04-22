<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return \App\Models\Attendance::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    $status = $request->status ?? 'hadir';

    \App\Models\Attendance::create([
        'user_id' => 1,
        'date' => now()->toDateString(),
        'check_in_time' => $status === 'hadir'
            ? now()->format('H:i:s')
            : null,
        'status' => $status,
        'note' => $request->note
    ]);

    return response()->json([
        'message' => 'Data absensi tersimpan'
    ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Attendance $attendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Attendance $attendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
{
    $attendance = \App\Models\Attendance::findOrFail($id);

    $attendance->status = $request->status;
    $attendance->note = $request->note;
    $attendance->save();

    return response()->json([
        'message' => 'Data berhasil diupdate'
    ]);
}

    /**
     * Remove the specified resource from storage.
     */
public function destroy(Attendance $attendance)
{
    $attendance->delete();

    return response()->json([
        'message' => 'Data dihapus'
    ]);
}
}
