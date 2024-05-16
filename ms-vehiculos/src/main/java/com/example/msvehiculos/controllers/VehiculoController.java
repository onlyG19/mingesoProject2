package com.example.msvehiculos.controllers;

import com.example.msvehiculos.entities.Vehiculo;
import com.example.msvehiculos.services.VehiculoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehiculos")
public class VehiculoController {

    VehiculoService vehiculoService;

    public VehiculoController(VehiculoService vehiculoService) {
        this.vehiculoService = vehiculoService;
    }

    @PostMapping
    public Vehiculo registrarVehiculo(@RequestBody Vehiculo vehiculo) {
        return vehiculoService.registrarVehiculo(vehiculo);
    }

    @GetMapping
    public List<Vehiculo> obtenerTodosLosVehiculos() {
        return vehiculoService.obtenerTodosLosVehiculos();
    }
}
