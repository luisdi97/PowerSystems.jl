#=
This file is auto-generated. Do not edit.
=#

#! format: off

"""
    mutable struct PSSPVr <: PSS
        Amp::Float64
        Omega::Float64
        Phi::Float64
        ext::Dict{String, Any}
        states::Vector{Symbol}
        n_states::Int
        internal::InfrastructureSystemsInternal
    end

Test PSS to obtain P-Vr frequency response

# Arguments
- `Amp::Float64`: Amplitude, validation range: `(0, nothing)`
- `Omega::Float64`: Frequency, validation range: `(0, nothing)`
- `Phi::Float64`: Phase, validation range: `(0, nothing)`
- `ext::Dict{String, Any}`
- `states::Vector{Symbol}`
- `n_states::Int`: PSSPVr has no states
- `internal::InfrastructureSystemsInternal`: power system internal reference, do not modify
"""
mutable struct PSSPVr <: PSS
    "Amplitude"
    Amp::Float64
    "Frequency"
    Omega::Float64
    "Phase"
    Phi::Float64
    ext::Dict{String, Any}
    states::Vector{Symbol}
    "PSSPVr has no states"
    n_states::Int
    "power system internal reference, do not modify"
    internal::InfrastructureSystemsInternal
end

function PSSPVr(Amp, Omega, Phi, ext=Dict{String, Any}(), )
    PSSPVr(Amp, Omega, Phi, ext, Vector{Symbol}(), 0, InfrastructureSystemsInternal(), )
end

function PSSPVr(; Amp, Omega, Phi, ext=Dict{String, Any}(), states=Vector{Symbol}(), n_states=0, internal=InfrastructureSystemsInternal(), )
    PSSPVr(Amp, Omega, Phi, ext, states, n_states, internal, )
end

# Constructor for demo purposes; non-functional.
function PSSPVr(::Nothing)
    PSSPVr(;
        Amp=0,
        Omega=0,
        Phi=0,
        ext=Dict{String, Any}(),
    )
end

"""Get [`PSSPVr`](@ref) `Amp`."""
get_Amp(value::PSSPVr) = value.Amp
"""Get [`PSSPVr`](@ref) `Omega`."""
get_Omega(value::PSSPVr) = value.Omega
"""Get [`PSSPVr`](@ref) `Phi`."""
get_Phi(value::PSSPVr) = value.Phi
"""Get [`PSSPVr`](@ref) `ext`."""
get_ext(value::PSSPVr) = value.ext
"""Get [`PSSPVr`](@ref) `states`."""
get_states(value::PSSPVr) = value.states
"""Get [`PSSPVr`](@ref) `n_states`."""
get_n_states(value::PSSPVr) = value.n_states
"""Get [`PSSPVr`](@ref) `internal`."""
get_internal(value::PSSPVr) = value.internal

"""Set [`PSSPVr`](@ref) `Amp`."""
set_Amp!(value::PSSPVr, val) = value.Amp = val
"""Set [`PSSPVr`](@ref) `Omega`."""
set_Omega!(value::PSSPVr, val) = value.Omega = val
"""Set [`PSSPVr`](@ref) `Phi`."""
set_Phi!(value::PSSPVr, val) = value.Phi = val
"""Set [`PSSPVr`](@ref) `ext`."""
set_ext!(value::PSSPVr, val) = value.ext = val
