#isdefined(Base, :__precompile__) && __precompile__()

module PowerSystems

#################################################################################
# Exports

export PowerSystem
export Bus

export Branch
export Network
export Line
export DCLine
export Transformer2W
export TapTransformer
export PhaseShiftingTransformer

export Forecast
export Deterministic
export Scenarios
export Probabilistic

export Generator

export HydroGen
export HydroFix
export HydroCurtailment
export HydroStorage
export TechHydro
export EconHydro

export RenewableGen
export TechRenewable
export EconRenewable
export RenewableFix
export RenewableCurtailment
export RenewableFullDispatch

export ThermalGen
export TechThermal
export EconThermal
export ThermalDispatch
export ThermalGenSeason

export ElectricLoad
export ShuntElement
export FixedAdmittance

export StaticLoad
export ControllableLoad
export InterruptibleLoad

export Storage
export GenericBattery

export Product
export Reserve
export Service
export ProportionalReserve

export ParseStandardFiles
#################################################################################
# Imports

import Base.convert
using Base.LinAlg.LAPACK.getri!
using Base.LinAlg.LAPACK.getrf!
using Base.LinAlg.BLAS.gemm
using TimeSeries
using PowerModels
using DataFrames
using CSV
using Memento

Memento.config!(getlogger("PowerModels"), "error")

# This packages will be removed with Julia v0.7
using Compat
using NamedTuples

#################################################################################
# Includes

abstract type PowerSystemDevice end

# Include utilities
include("utils/base_checks.jl")

# PowerSystems models
include("models/topological_elements.jl")
include("models/forecasts.jl")
include("models/branches.jl")
include("models/network.jl")

# Static types
include("models/generation.jl")
include("models/storage.jl")
include("models/loads.jl")
include("models/products.jl")

# Include Parsing files
include("parsers/dict_to_struct.jl")
include("parsers/standardfiles_parser.jl")
include("parsers/csv_parser.jl")
include("parsers/cdm_parser.jl")
include("parsers/forecast_parser.jl")
include("parsers/pm2ps_parser.jl")

# Definitions of PowerSystem
include("utils/system_checks.jl")
include("base.jl")

# Better printing
include("utils/print.jl")

end # module
