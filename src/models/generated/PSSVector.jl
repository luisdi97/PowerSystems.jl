#=
This file is auto-generated. Do not edit.
=#

#! format: off

"""
    mutable struct PSSVector <: PSS
        ts::Float64
        output_vector::Vector{Float64}
        ext::Dict{String, Any}
        states::Vector{Symbol}
        n_states::Int
        internal::InfrastructureSystemsInternal
    end

Test PSS that uses output signal vector.

# Arguments
- `ts::Float64`: Time step, validation range: `(0, nothing)`
- `output_vector::Vector{Float64}`: Output signal vector
- `ext::Dict{String, Any}`
- `states::Vector{Symbol}`
- `n_states::Int`: PSSVector has no states
- `internal::InfrastructureSystemsInternal`: power system internal reference, do not modify
"""
mutable struct PSSVector <: PSS
    "Time step"
    ts::Float64
    "Output signal vector"
    output_vector::Vector{Float64}
    ext::Dict{String, Any}
    states::Vector{Symbol}
    "PSSVector has no states"
    n_states::Int
    "power system internal reference, do not modify"
    internal::InfrastructureSystemsInternal
end

function PSSVector(ts, output_vector, ext=Dict{String, Any}(), )
    PSSVector(ts, output_vector, ext, Vector{Symbol}(), 0, InfrastructureSystemsInternal(), )
end

function PSSVector(; ts, output_vector, ext=Dict{String, Any}(), states=Vector{Symbol}(), n_states=0, internal=InfrastructureSystemsInternal(), )
    PSSVector(ts, output_vector, ext, states, n_states, internal, )
end

# Constructor for demo purposes; non-functional.
function PSSVector(::Nothing)
    PSSVector(;
        ts=0,
        output_vector=Float64[],
        ext=Dict{String, Any}(),
    )
end

"""Get [`PSSVector`](@ref) `ts`."""
get_ts(value::PSSVector) = value.ts
"""Get [`PSSVector`](@ref) `output_vector`."""
get_output_vector(value::PSSVector) = value.output_vector
"""Get [`PSSVector`](@ref) `ext`."""
get_ext(value::PSSVector) = value.ext
"""Get [`PSSVector`](@ref) `states`."""
get_states(value::PSSVector) = value.states
"""Get [`PSSVector`](@ref) `n_states`."""
get_n_states(value::PSSVector) = value.n_states
"""Get [`PSSVector`](@ref) `internal`."""
get_internal(value::PSSVector) = value.internal

"""Set [`PSSVector`](@ref) `ts`."""
set_ts!(value::PSSVector, val) = value.ts = val
"""Set [`PSSVector`](@ref) `output_vector`."""
set_output_vector!(value::PSSVector, val) = value.output_vector = val
"""Set [`PSSVector`](@ref) `ext`."""
set_ext!(value::PSSVector, val) = value.ext = val
