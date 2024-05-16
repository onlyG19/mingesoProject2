package com.example.msvehiculos.services;

import com.example.msvehiculos.entities.Vehiculo;
import com.example.msvehiculos.repositories.VehiculoRepository;
import jakarta.transaction.Transactional;

import java.util.List;

public class VehiculoService {

    VehiculoRepository vehiculoRepository;

    public VehiculoService(VehiculoRepository vehiculoRepository) {
        this.vehiculoRepository = vehiculoRepository;
    }

    public Vehiculo registrarVehiculo(Vehiculo vehiculo){
        return vehiculoRepository.save(vehiculo);
    }

    public List<Vehiculo> obtenerTodosLosVehiculos() {
        return vehiculoRepository.findAll();
    }

    public Vehiculo getVehiculoById(Long vehiculoId) {
        return vehiculoRepository.findById(vehiculoId).orElse(null);
    }


}
