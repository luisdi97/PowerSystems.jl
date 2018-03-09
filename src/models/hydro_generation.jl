export HydroGen 
export NoDispatchHydro
export DispatchHydro

abstract type 
    HydroGen
end


struct TechHydro 
    realpower::Real # [MW]
    realpowerlimits::Tuple{Real,Real}
    reactivepower::Union{Real,Missing} # [MVAr]
    reactivepowerlimits::Union{Tuple{Real,Real},Missing}
    ramplimits::Union{Tuple{Real,Real},Missing}
    timelimits::Union{Tuple{Real,Real},Missing}
    function TechHydro(realpower, realpowerlimits, reactivepower, reactivepowerlimits, ramplimits, timelimits) 

        new(realpower, orderedlimits(realpowerlimits), reactivepower, orderedlimits(reactivepowerlimits), ramplimits, timelimits)

    end
end

TecHydro(; realpower = 0.0, 
          realpowerlimits = (0.0,0.0), 
          reactivepower = missing,  
          reactivepowerlimits = missing,
          ramplimits = missing,
          timelimits = missing
        ) = TechHydro(realpower, realpowerlimits, reactivepower, reactivepowerlimits, ramplimits, timelimits)

struct NoDispatchHydro <: HydroGen
    name::String
    status::Bool
    bus::Bus
    tech::TechHydro
    scalingfactor::TimeSeries.TimeArray
end

struct DispatchHydro <: HydroGen 
    name::String
    status::Bool
    bus::Bus
    tech::TechHydro
    storagecapacity::Real
    scalingfactor::TimeSeries.TimeArray
end